import { ReactNode } from "react";

interface SectionTemplatePropType {
  title: string;
  caption: string;
  children: ReactNode;
  classNameParent: string;
}

const SectionTemplate = ({
  title,
  caption,
  children,
  classNameParent,
}: SectionTemplatePropType): JSX.Element => {
  return (
    <section className={classNameParent}>
      <div className="container">
        <h2 className="text-2xl font-vazirMedium text-center">{title}</h2>
        <h3 className="text-center mt-3 flex items-center after:block after:border-t after:border-[#D5D5D5] after:flex-grow after:mr-3 before:block before:border-t before:border-[#D5D5D5] before:flex-grow before:ml-3">
          {caption}
        </h3>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
};

export default SectionTemplate;
