import React from "react";

interface Props {
  title: string;
  desc: React.ReactNode;
  "image-url": string;
  "image-alt": string;
}

const EarnStarsCard: React.FC<Props> = (props) => {
  return (
    <div className="flex pb-8 xl:pb-0 md:w-earn-star-card">
      <div className="flex-grow-0 flex-shrink-0 cursor-pointer md:pb-8 md:mx-auto">
        <img
          className="h-40 pt-2 pr-4"
          src={props["image-url"]}
          alt={props["image-alt"]}
        />
      </div>
      <div>
        <h3 className="text-base font-semibold md:text-xl">{props.title}</h3>
        <p className="pt-4">{props.desc}</p>
      </div>
    </div>
  );
};

export default React.memo(EarnStarsCard);
