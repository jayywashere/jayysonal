import { initTime } from "./time.js";
import { initFun } from "./fun.js";
import { initProfilePic } from "./profile.js";
import { initTheme } from "./theme.js";
import { initReadingProgress } from "./reading-progress.js";
import { initBgm } from "./bgm.js";

function main(): void {
    initTime();
    initFun();
    initProfilePic();
    initTheme();
    initReadingProgress();
    initBgm();
}

main();
