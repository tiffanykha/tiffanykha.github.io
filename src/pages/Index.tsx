import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - About Me, Writings, Subscribe */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <LeftPanel />
      </div>

      {/* Right Panel - Art Gallery */}
      <div className="hidden lg:block w-1/2 flex-shrink-0">
        <RightPanel />
      </div>

      {/* Mobile: Stack panels vertically */}
      <div className="block lg:hidden w-full">
        <RightPanel />
      </div>
    </div>
  );
};

export default Index;