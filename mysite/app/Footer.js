export default function Footer() {
  const copy = "\u00A9";
  const year = new Date().getFullYear();
  const name = process.env.NAME;

  return (
    <footer class="footer">
      <p>{`Copyright ${copy} ${year} ${name}. All rights reserved.`}</p>
    </footer>
  );
}
