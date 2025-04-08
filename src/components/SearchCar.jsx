"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { CameraIcon, CloudUploadIcon, UploadCloud } from "lucide-react";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SearchCar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      toast.error("Please enter a valid search");
      return;
    }
    router.push(`/cars?search=${encodeURIComponent(search)}`);
  };
  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("please upload an image");
      return;
    }
  };

  const onDrop = (acceptfile) => {
    // Do something with the files
    const file = acceptfile[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };
      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Error uploading image");
      };
      reader.readAsDataURL(file);
    }
  };
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png"],
      },
      maxFiles: 1,
    });

  return (
    <>
      <form onSubmit={handleTextSubmit} className="w-full">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for cars"
          className="py-6"
        />
        <div className="absolute right-25 top-3 flex items-center justify-center ">
          <CameraIcon
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-1   rounded-md"
            style={{
              background: isOpen ? "black" : "",
              color: isOpen ? "white" : "",
            }}
          />
        </div>
        <div className="absolute right-4 top-2 flex items-center justify-center">
          <Button type="submit">Search</Button>
        </div>
      </form>
      <br></br>
      <div className="mt-6 ">
        {isOpen && (
          <form onSubmit={handleImageSubmit}>
            <div className="border-3  border-dotted border-black py-4 rounded-xl ">
              {imagePreview ? (
                <div>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-30 h-30 object-cover items-center flex justify-between mx-auto mb-4"
                  />
                  <Button
                    variant={"secondary"}
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview("");
                      toast.info("Image removed");
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="flex flex-col  items-center justify-center">
                    <CloudUploadIcon className="h-14 w-14 text-gray-500 hover:text-gray-700" />
                    {isDragActive && !isDragReject ? (
                      <p>Click to Select Image</p>
                    ) : (
                      <p>Drag 'n' drop image here or click to select image</p>
                    )}
                    {isDragReject && (
                      <p className="text-red-500">Image type not supported</p>
                    )}
                    <p className="text-gray-400 text-sm">
                      Supports: JPG, PNG (max 5MB)
                    </p>
                  </div>
                </div>
              )}
              {imagePreview && (
                <Button type="submit" className="mt-4" disabled={isUploading}>
                  {isUploading ? "Uploading..." : "search with image"}
                </Button>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default SearchCar;
