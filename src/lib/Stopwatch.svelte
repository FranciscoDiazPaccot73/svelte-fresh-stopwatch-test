<script>
	let time = 0;
  let running = false;
</script>

<div class="watch">
  <div>
    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
  </div>
  <div class="numbers">
    <button 
      class='button'
      onClick={() => running = !running}>{running ? 'Stop' : 'Start'}</button>
    <button 
      class='button'
      disabled={running || time === 0} onClick={() => time = 0}>Reset</button>       
  </div>
</div>

<style>
  .watch {
    font-size: 100px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -55%);
    width: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .numbers {
    position: absolute;
    top: 95%;
    left: 48.4%;
    transform: translate(-51.6%, -45%);
  }
  .button {
    width: 60px;
    margin: 16px 6px;
  }
</style>
