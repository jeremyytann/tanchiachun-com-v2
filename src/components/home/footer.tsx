export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="section-card flex justify-center">
      <p className="text-md md:text-lg font-light color-primary leading-8">
        © {year} Tan Chia Chun
      </p>
    </div>
  );
}
