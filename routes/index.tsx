export default function Home() {
  return (
    <>
      {/* The parent DOM element for the Phaser canvas */}
      <div id="game-container"></div>

      {/* The Phaser game script */}
      <script type="module" src="/game.js"></script>
    </>
  );
}
