interface SessionsBoxTemplateType {
  img: JSX.Element | string;
  title: string;
  caption: string;
  children: JSX.Element;
}

const SessionsBoxTemplate = ({
  img,
  title,
  caption,
  children,
}: SessionsBoxTemplateType): JSX.Element => {
  return (
    <div
      id="sesttion box"
      className="mt-6 bg-white border border-fourth shadow-[0_0px_18px_rgba(41,58,78,0.09)] p-4 rounded-lg leading-6"
    >
      <div className="flex items-center pb-2 border-b">
        {typeof img === "string" ? (
          <img className="w-14 h-14" src={img} />
        ) : (
          img
        )}
        <span className="mr-3 sm:mr-5">
          <h5 className="text-[13px] sm:text-[17px] font-vazirMedium">
            {title}
          </h5>
          <p className="mt-1 text-[13px] sm:text-sm">{caption}</p>
        </span>
      </div>
      {children}
    </div>
  );
};
export default SessionsBoxTemplate;
