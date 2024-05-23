"use client"
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./components/Card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Page({ params }: { params: { slug: string } }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfo = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://resourcebackend.onrender.com/api/${params.slug}`);
      setInfo(data.data);
    } catch (error) {
      setInfo([]);
    } finally {
      setLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <div className="grid grid-rows-1 gap-[3rem] pt-10 lg:grid-cols-3 px-10">
      {loading ? (
        Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} height={200} />
        ))
      ) : (
        info.map((ele: any, index: number) => (
          <Card
            key={index}
            image={ele.attributes.image}
            link={ele.attributes.link}
            header={ele.attributes.name}
          />
        ))
      )}
    </div>
  );
}
