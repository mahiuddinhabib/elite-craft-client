import CategoryCard from "./CategoryCard";

const FeaturedCategory = () => {
  const categories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
  ];
  return (
    <div>
      <h1 className="text-center my-8 text-4xl font-bold">Featured Categories</h1>
      <div className="flex md:flex-row flex-col gap-4 mx-4 mb-8">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
