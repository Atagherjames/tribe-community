import { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { EStorePrice, EStoreType } from "@/enums/enums";
import { TDiscoveryQueries } from "@/types/types";

export const useDiscoveryPriceAndTypeFilters = () => {
  const navigate = useNavigate({ from: "/" });
  const { type, price } = useSearch({ from: "/" });

  const [selectedType, setSelectedType] = useState<string>(
    type || EStoreType.PUBLIC
  );
  const [selectedPrice, setSelectedPrice] = useState<string>(
    price || EStorePrice.FREE
  );

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    handlePushQuery("type", value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedPrice(value);
    handlePushQuery("price", value);
  };

  const handlePushQuery = useMemo(
    () => (name: keyof TDiscoveryQueries, value: unknown) => {
      navigate({
        search: (prev) => {
          const newSearch = { ...prev } as TDiscoveryQueries;
          if ((name === "type" || name === "price") && value === "all") {
            delete newSearch[name];
          } else {
            newSearch[name] = value as string;
          }
          return newSearch;
        },
      });
    },
    [navigate]
  );

  useEffect(() => {
    setSelectedType(type || EStoreType.PUBLIC);
    setSelectedPrice(price || EStorePrice.FREE);
  }, [type, price]);

  return {
    type,
    price,
    selectedType,
    selectedPrice,
    setSelectedType,
    setSelectedPrice,
    handlePushQuery,
    handleTypeChange,
    handlePriceChange,
  };
};
