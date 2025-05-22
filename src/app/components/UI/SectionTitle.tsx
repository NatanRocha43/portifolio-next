interface SectionTitleProps {
    title: string;
    subtitle: string;
    id?: string; // opcional, para acessibilidade
  }
  
  export function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
    return (
      <div className="flex flex-col items-center gap-2" role="heading" aria-level={2} aria-labelledby={id}>
        <h2
          className="text-2xl lg:text-5xl font-extrabold text-white"
          id={id}
        >
          {title}
        </h2>
        <span className="text-sm lg:text-3xl font-extrabold leading-tight bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
          {subtitle}
        </span>
      </div>
    );
  }
  