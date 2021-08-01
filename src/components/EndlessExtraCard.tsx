import React from "react";

interface Props {
  title: string;
  desc: string;
  "image-url": string;
  "image-alt": string;
  learnMoreUrl: string;
}

const EndlessExtraCard: React.FC<Props> = (props) => {
  return (
    <div className="flex pb-8 md:flex-col">
      <div className="flex-grow-0 flex-shrink-0 cursor-pointer md:pb-8 md:mx-auto">
        <img
          className="pr-4 h-28"
          src={props["image-url"]}
          alt={props["image-alt"]}
        />
      </div>
      <div>
        <h3 className="text-base font-semibold md:text-xl">{props.title}</h3>
        <p className="pt-4">{props.desc}</p>
        <a
          className="inline-block pt-4 underline text-primary-300 hover:no-underline"
          href={props.learnMoreUrl}
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default React.memo(EndlessExtraCard);
