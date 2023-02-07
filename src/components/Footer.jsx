export const Footer = () => {
  return (
    <main className="footer-section">
      <h4>Let's Work Together</h4>;
      <img
        className="footer-logo"
        src={process.env.PUBLIC_URL + `/images/logo.PNG`}
        alt="FLEXBOX logo"
      />
    </main>
  );
};
