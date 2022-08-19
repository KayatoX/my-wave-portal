// run.js
const main = async () => {
    // hre.ethers.getSigners()はHardhatが提供する任意のアドレスを返す関数
    // コントラクトの所有者とwaveを送るユーザーの2つのアドレスを生成して、それぞれownerとrandomPersonに格納している
    const [owner, randomPerson] = await hre.ethers.getSigners();
    // WavePortalコントラクトがコンパイルされる
    // hre.ethers.getContractFactry はデプロイサポートのライブラリのアドレスとWavePortalコントラクトの連携
    // hre.ethersはHardhatのプラグイン仕様
    // await が先頭についている処理が終わるまで他の処理は行われない
    // Hardhat が Hardhat Runtime Environment（HRE）を呼び出しているからhreのimport不要
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    // ローカルのEthereumネットワークをコントラクトのためだけに作成する
    // スクリプトが実行された後に消える
    const waveContract = await waveContractFactory.deploy();
    // WavecPortalコントラクトがデプロイされるまで待つ処理を書いている
    const wavePortal = await waveContract.deployed();
    
    console.log("Deploying contracts with account:", deployer.address);
    console.log("Account balance:", accountBalance.toString());
    // スマートコントラクトのデプロイ先のアドレスを表示
    console.log("Contract deployed to:", wavePortal.address);
    // スマートコントラクトをデプロイした人のアドレスを表示
    console.log("Contract deployed by:", owner.address);

    // ローカル変数の定義
    let waveCount;
    // 既存のwaveの総数を取得
    waveCount = await waveContract.getTotalWaves();
    // ユーザーが新しいwaveを送るまで待機させている
    let waveTxn = await waveContract.wave();
    // Metamaskの承認が終わったらトランザクションを取得する
    await waveTxn.wait();
    // トランザクション後のwave数を取得している
    waveCount = await waveContract.getTotalWaves();

    // ランダムユーザーがあなたにwaveを送ったシチュエーションを作っている
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();