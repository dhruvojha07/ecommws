import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ui/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLineIcon, CheckCircle, Ghost, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLineIcon,
    description:
      "Get Your assets delivered to your email in seconds and download them right away!",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every Asset on our platform is verified by us. Not Happy? We offer a 30-day Refund.",
  },
  {
    name: "For The Planet",
    Icon: Leaf,
    description: "We've pledged to give 1% of sales to save the planet.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-large max-w-prose text-muted-foreground">
            Welcome to Marketplace. Every asset on our platform is verified by
            our team to ensure our highest quality standards{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Out Quality Promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products"
          title="Brand New"
        />
        {/* TODO: LIST PRODUCTS */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) => (
              <div
                key={perks.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center bg-red-100 rounded-full text-red-700">
                    {<perks.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perks.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perks.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
