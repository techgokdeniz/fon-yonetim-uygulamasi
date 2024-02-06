import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

const SearchInput = ({ data }) => {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("search") || "");
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);
      if (inputValue.length > 0) {
        searchParams.set('search', inputValue);
      } else {
        searchParams.delete('search');
      }
      router.push({
        pathname: router.pathname,
        search: searchParams.toString()
      });
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, router]);

  return (
    <div>
      <Input
        placeholder="Fon Listesinde Arama Yapın" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {data && data.length > 0 ? (
        <div>1</div>
      ) : null}
    </div>
  );
};

export default SearchInput;
