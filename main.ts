/**
 * Custom blocks for my Arcade extension
 */
//% weight=100 color=#0fbc11 icon="\uf11b"
namespace myExtension {
    /**
     * A sample block that pops up a message on the screen
     */
    //% block="show arcade message $msg"
    export function showMessage(msg: string): void {
        game.splash(msg);
    }
}