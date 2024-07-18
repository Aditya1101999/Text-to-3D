import Spline from "@splinetool/react-spline";

const SplineDesign = () => {
  return (
    <Spline
    style={{width: '100%', height: '100%', overflow:"visible"}}
      className='w-full h-96 flex items-center justify-center md:justify-start -z-10'
      scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'
    />
  );
};

export default SplineDesign;
