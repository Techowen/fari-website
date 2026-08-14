import { Btn } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "62vh", display: "grid", alignItems: "center" }}>
      <div className="wrap wrap--narrow center">
        <span className="eyebrow eyebrow--light" style={{ display: "inline-flex" }}>
          Error 404
        </span>
        <h1>This page could not be found</h1>
        <p style={{ marginInline: "auto" }}>
          The page you are looking for may have been moved or removed. The links below will get you
          back to the parts of the site that are working.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.9rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "2.25rem",
          }}
        >
          <Btn href="/" variant="light" arrow>
            Back to home
          </Btn>
          <Btn href="/what-we-do" variant="ghost">
            What we do
          </Btn>
          <Btn href="/contact" variant="ghost">
            Contact us
          </Btn>
        </div>
      </div>
    </section>
  );
}
