import React from "react";
import ServiceBtn from "@/components/Buttons/ServiceBtn";
import { useBookDrawer } from "@/store/useBookDrawer";

const OurProcess = () => {
     const openDrawer = useBookDrawer((state) => state.openDrawer);

  return (
    <section className="w-full px-5 lg:px-24 py-12 lg:py-20">
      <div className="mx-auto flex flex-col gap-14 lg:gap-28">

{/* Row 1 */}
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-14">
  {/* Image */}
  <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-lg">
    <img
      src="/images/home/DSC00277.webp"
      alt="Doorstep pickup and delivery"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col gap-4 lg:gap-6">
    <h3 className="text-2xl lg:text-6xl font-medium">
      Doorstep Pickup & Delivery
    </h3>

    <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
      Convenience begins at your doorstep. Our team ensures seamless pickup
      and delivery of your garments, eliminating the need for store visits
      while maintaining complete care accountability.
    </p>

    <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
      Each order is carefully logged, tracked, and handled with precision,
      ensuring timely service and consistent quality from pickup to delivery.
    </p>

    <div onClick={openDrawer} className="lg:w-[30%] mt-3 lg:mt-10">
      <ServiceBtn />
    </div>
  </div>
</div>

{/* Row 2 */}
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-14">
  {/* Content */}
  <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
    <h3 className="text-2xl lg:text-6xl font-medium">
      Specialist Stain Removal
    </h3>

    <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
      Stains are treated with expert precision, not guesswork. Our specialists
      analyze fabric composition, dye sensitivity, and stain origin before
      selecting a targeted removal process.
    </p>

    <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
      Fabric-safe techniques and controlled treatments ensure effective stain
      removal while preserving texture, color integrity, and garment life.
    </p>

    <div onClick={openDrawer} className="lg:w-[30%] mt-3 lg:mt-10">
      <ServiceBtn />
    </div>
  </div>

  {/* Image */}
  <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-lg order-1 lg:order-2">
    <img
      src="/images/home/DSC00243.webp"
      alt="Specialist stain removal process"
      className="w-full h-full object-cover"
    />
  </div>
</div>

{/* Row 3 */}
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-14">
  {/* Image */}
  <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-lg">
    <img
      src="/images/home/NVP_3238.webp"
      alt="Luxury garment and accessory restoration"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col gap-4 lg:gap-6">
    <h3 className="text-2xl lg:text-6xl font-medium">
      Restoration & Luxury Care
    </h3>

    <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
      From wedding wear to luxury shoes and designer bags, we specialize in
      restoration that goes beyond cleaning. Every piece is handled by skilled
      professionals trained in premium garment care.
    </p>

    <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
      Our restoration processes revive structure, finish, and elegance,
      extending the life of treasured items while preserving their original
      craftsmanship.
    </p>

    <div onClick={openDrawer} className="lg:w-[30%] mt-3 lg:mt-10">
      <ServiceBtn />
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default OurProcess;
