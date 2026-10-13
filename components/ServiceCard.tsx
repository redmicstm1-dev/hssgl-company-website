import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  text: string;
  icon: string;
  image: string;
};

export function ServiceCard({ title, text, icon, image }: ServiceCardProps) {
  return (
    <article className="card service-card service-card-with-image">
      <div className="service-card-image">
        <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
      </div>
      <div className="service-card-body">
        <div className="icon-box">
          <Image src={icon} alt="" width={26} height={26} aria-hidden="true" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href="/services">Explore service <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
