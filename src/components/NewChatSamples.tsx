type SampleProps = {
  text: string;
};

const Sample = ({ text }: SampleProps) => {
  return (
    <div className="border-borderColor max-w-[245px] cursor-pointer text-wrap rounded-[16px] border-[1px] px-3 py-2 text-xs font-normal text-[#D9D9D9]">
      {text}
    </div>
  );
};

const NewChatSamples = () => {
  return (
    <div className="flex w-full flex-wrap gap-4">
      <Sample
        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"}
      />
      <Sample
        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"}
      />
      <Sample
        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"}
      />
      <Sample
        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"}
      />
      <Sample
        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"}
      />
      <Sample
        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"}
      />
    </div>
  );
};

export default NewChatSamples;
