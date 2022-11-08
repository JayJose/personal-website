export default function Footer() {
  const copy = "\u00A9";
  const year = new Date().getFullYear();
  const me = process.env.MYNAME;

  return (
    <footer class="footer">
      <p>{`Copyright ${copy} ${year} ${me}. All rights reserved.`}</p>
    </footer>
  );
}
