// WavePortal.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract WavePortal {
    // 自動的に0に初期化される状態変数
    // WavePortalコントラクトストレージに永続的に保存される
    // 非常に大きな数を取り扱える「符号なし整数のデータ型」を意味する
    uint256 totalWaves;

    constructor() {
        console.log("Here is my first smart contract!");
    }
    
    // publicはコントラクト内外からの呼び出し可能
    // priveteはコントラクト内からしか呼び出せないし、継承不可
    // internal はコントラクト内から呼び出せ、継承できる
    // external はコントラクト外からしか呼び出せない
    function wave() public {
        totalWaves += 1;
        //msg.senderは関数を呼び出した人のウォレットアドレス
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
