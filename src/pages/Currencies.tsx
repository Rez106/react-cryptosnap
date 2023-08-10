import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import formatCurrency from "../utils/formatCurrency";
import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import PaginationButtons from "../components/Pagination/PaginationButtons";

export async function loader<T>() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
  return null;
}

type Coin = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
};

const Currencies = () => {
  const loaderData = useLoaderData();
  const [NewPageNumber, setNewPageNumber] = useState(1);
  const [currencies, setCurrencies] = useState<Coin[] | [] | object>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      typeof loaderData === "string" ||
      loaderData == null ||
      loaderData == undefined
    ) {
      return setError(loaderData || "");
    } else {
      setCurrencies(loaderData);
    }
  }, [loaderData]);

  const paginateHandler = (pageNumber: number) => {
    setNewPageNumber(pageNumber);
  };

  const tableRowsContent = currencies
    .slice((NewPageNumber - 1) * 10, (NewPageNumber - 1) * 10 + 10)
    .map((coin: Coin) => {
      const marketCap = coin.market_cap.toString();
      const finalMarketCap: number = parseInt(marketCap);
      console.log(finalMarketCap);

      return (
        <div className="table-body-row" key={coin.id}>
          <div className="table-body-styles text-slate-100">
            <div className="flex items-center gap-2">
              <span>{coin.market_cap_rank} .</span>
              <img src={coin.image} alt="" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100">
                {coin.symbol.toUpperCase()}
              </span>
              <span className="font-medium text-slate-100">{coin.name}</span>
            </div>
          </div>
          <div className="table-body-styles text-slate-100">
            {formatCurrency(coin.current_price)}
          </div>
          <div
            className={`table-body-styles ${
              coin.price_change_percentage_24h > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {coin.price_change_percentage_24h > 0 ? "+" : ""}
            {coin.price_change_percentage_24h}%
          </div>
          <div className="table-body-styles text-slate-100">
            {formatCurrency(finalMarketCap).split(".")[0]} M
          </div>
        </div>
      );
    });

  return (
    <>
      {error ? (
        <div className="flex flex-col items-center gap-5">
          <p className="font-bold flex justify-center gap-3 text-5xl mt-10 text-red-500">
            <BiErrorAlt /> Error: {loaderData || "Something went Wrong!"}
          </p>
          <Link
            to="/"
            className="font-semibold py-3 px-7 rounded-xl bg-sky-400 text-slate-700 transition-colors hover:text-slate-800 hover:bg-sky-300"
          >
            Try again
          </Link>
        </div>
      ) : (
        <div className="currencies-wrapper">
          <div className="currencies-table">
            <div className="table-headers">
              <h5 className="table-header-styles">Currency</h5>
              <h5 className="table-header-styles">Price</h5>
              <h5 className="table-header-styles">24h Change</h5>
              <h5 className="table-header-styles">Market Cap</h5>
            </div>
            <div className="table-rows">{tableRowsContent}</div>
          </div>
          <PaginationButtons action={paginateHandler} />
        </div>
      )}
    </>
  );
};

export default Currencies;
