import { FC } from "react";

const SideNav: FC<{ showSideNav: boolean }> = ({ showSideNav }) => {
  return (
    <aside
      className={`${
        !showSideNav ? "hidden" : ""
      } absolute top-0 right-1/4 bottom-0 left-0 h-screen z-10 md:right-2/4 lg:right-3/4`}
    >
      <div className="h-full bg-blue-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit blanditiis
        numquam, sunt accusantium, ullam asperiores deleniti libero voluptatum
        quibusdam temporibus quo architecto suscipit alias amet dicta iste
        praesentium! Dolorum, recusandae? Odit sunt in laborum, quia a
        temporibus nam saepe at voluptatibus dicta cum amet, nesciunt adipisci
        iste, rerum quisquam explicabo magnam dignissimos fugit natus porro
        atque. Atque nihil ipsa exercitationem?
      </div>
    </aside>
  );
};

export default SideNav;
