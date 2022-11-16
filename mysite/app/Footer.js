export default function Footer() {
  const copy = "\u00A9";
  const year = new Date().getFullYear();

  return (
    <footer class="footer">
      <p>{`Copyright ${copy} ${year} John J. Murray. All rights reserved.`}</p>
    </footer>
  );
}
