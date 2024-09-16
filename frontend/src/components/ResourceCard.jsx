export function ResourceCard({ imgUrl, name, description, url }) {
  return (
    <div className="bg-cardbg border-[1px] border-solid border-textGray rounded-[26px] max-h-[320px] sm:w-auto phone:w-4/5 phone:mx-auto">
      <a href={url} target="_blank">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-2/4 rounded-t-[24px] object-cover"
        />
        <section className="p-5 h-2/4">
          <div className="flex items-center gap-4">
            <strong className="font-questrial text-[20px]">{name}</strong>
          </div>
          <p className="font-questrial text-textGray">{description}</p>
        </section>
      </a>
    </div>
  );
}
