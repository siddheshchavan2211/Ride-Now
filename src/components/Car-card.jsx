"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Calendar, Gauge, Fuel, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CarCard({ car }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-white rounded-xl shadow">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-600"
            }`}
          />
        </button>
        <Badge className="absolute top-3 left-3 bg-emerald-600 hover:bg-emerald-700">
          {car.type}
        </Badge>
      </div>

      <CardContent className="p-5">
        <div className="space-y-2">
          <h3 className="font-semibold text-xl">{car.name}</h3>
          <p className="text-2xl font-bold text-emerald-600">
            ${car.price.toLocaleString()}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1.5" />
              {car.year}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Gauge className="h-4 w-4 mr-1.5" />
              {car.transmission}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Fuel className="h-4 w-4 mr-1.5" />
              {car.fuel}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Tag className="h-4 w-4 mr-1.5" />
              {car.color}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          View Car
        </Button>
      </CardFooter>
    </Card>
  );
}
