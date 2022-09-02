import SubSection from "./SubSection";
import CardDealShap from "./CardDealShap";
const CardDeal = () => {
  const leftSide = {
    title: (
      <>
        Find a better card deal <br /> in few easy steps.
      </>
    ),
    text: "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
  };
  return (
    <section id="product" className="overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-y-[140px] h-fit ss:min-h-screen py-0 ss:py-[100px] md:py-0 ">
        <SubSection title={leftSide.title} btn={true} text={leftSide.text} />
        <div className="grow">
          <div className="hidden w-full xs:flex items-center justify-center ">
            <CardDealShap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
