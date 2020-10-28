<template>
  <div class="wrap">
    <div class="container">
      <div class="cats">
        <div class="cat cat-left">
          <div class="cat-neck"></div>
          <div class="cat-head">
            <div class="cat-eye left"></div>
            <div class="cat-eye right"></div>
            <div class="cat-mouth"></div>
          </div>
        </div>
        <div class="cat cat-right">
          <div class="cat-neck"></div>
          <div class="cat-head">
            <div class="cat-eye left"></div>
            <div class="cat-eye right"></div>
            <div class="cat-mouth"></div>
          </div>
        </div>
      </div>
      <div class="grass">
        <div class="flower fadeInUp">
          <div class="stem"><span></span></div>
        </div>
        <div class="flower two fadeInUp">
          <div class="stem"><span></span></div>
        </div>
        <div class="flower three fadeInUp">
          <div class="stem"><span></span></div>
        </div>
      </div>
      <div class="girl">
        <div class="ears"></div>
        <div class="top"></div>
        <div class="hands"></div>
        <div class="dress"></div>
        <div class="head">
          <div class="eye left-eye"></div>
          <div class="eye right-eye"></div>
          <div class="mouth"></div>
          <div class="nose"></div>
        </div>
        <div class="left leg"></div>
        <div class="right leg"></div>
      </div>
      <div class="boy">
        <div class="ears"></div>
        <div class="hands"></div>
        <div class="dress"></div>
        <div class="head">
          <div class="eye left-eye"></div>
          <div class="eye right-eye"></div>
          <div class="mouth"></div>
          <div class="nose"></div>
        </div>
        <div class="left leg"></div>
        <div class="right leg"></div>
      </div>
    </div>
  </div>
</template>
<script>
import "animate.css";
export default {};
</script>
<style lang="scss" scoped>
div:before,
div:after {
  content: "";
}
*:before,
*:after {
  content: "";
  position: absolute;
}
// body {
//   margin: 0;
// }
.wrap {
  width: 100vw;
  height: 100vh;
  position: relative;
  // padding: #{20 * 0.08vw};
}
.container {
  // background: url(http://media.html5book.ru/background-1.jpg);
  width: 100vw;
  height: 100vh;
  padding-top: 0;
  margin: #{50 * 0.08vw} auto;
  position: relative;
  overflow: hidden;
}
.girl {
  position: relative;
  left: #{175 * 0.08vw};
  width: #{110 * 0.08vw};
  float: left;
  margin-right: #{20 * 0.08vw};
}
.boy {
  position: relative;
  width: #{110 * 0.08vw};
  left: 24vw;
}
.head {
  position: absolute;
  top: #{35 * 0.08vw};
  left: #{5 * 0.08vw};
  width: #{100 * 0.08vw};
  height: #{87 * 0.08vw};
  border-radius: 50%;
  overflow: hidden;
  background: #f7f7f7;
}
.head:before {
  top: 0;
  left: 0;
  height: #{45 * 0.08vw};
  width: 50%;
  border-bottom-right-radius: #{40 * 0.08vw} #{25 * 0.08vw};
  background: #784820;
}
.boy .head:before {
  width: 75%;
  border-bottom-right-radius: #{60 * 0.08vw} #{25 * 0.08vw};
}
.head:after {
  top: #{0 * 0.08vw};
  left: 50%;
  height: #{45 * 0.08vw};
  width: 50%;
  border-bottom-left-radius: #{40 * 0.08vw} #{25 * 0.08vw};
  background: #784820;
}
.boy .head:after {
  width: 25%;
  left: 75%;
  border-bottom-left-radius: #{40 * 0.08vw} #{35 * 0.08vw};
}
.top {
  position: absolute;
  top: 0;
  left: #{30 * 0.08vw};
  background: #784820;
  width: #{50 * 0.08vw};
  height: #{45 * 0.08vw};
  border-radius: 50%;
}
.hands {
  position: absolute;
  top: #{115 * 0.08vw};
  left: #{20 * 0.08vw};
  width: #{70 * 0.08vw};
  height: #{46 * 0.08vw};
  border-radius: #{10 * 0.08vw};
  background: #f7f7f7;
}
.boy .hands {
  background: linear-gradient(#e3512d #{10 * 0.08vw}, #f7f7f7 #{10 * 0.08vw});
}
.dress {
  position: absolute;
  top: #{115 * 0.08vw};
  left: #{30 * 0.08vw};
  width: #{50 * 0.08vw};
  height: #{57 * 0.08vw};
  background: #e3512d;
}
.dress:before {
  bottom: #{14 * 0.08vw};
  left: 0;
  height: #{8 * 0.08vw};
  width: 100%;
  background: #784820;
}
.boy .dress:before {
  bottom: 0;
  height: #{14 * 0.08vw};
}
.dress:after {
  top: #{3 * 0.08vw};
  left: #{17 * 0.08vw};
  height: #{12 * 0.08vw};
  width: #{16 * 0.08vw};
  border-bottom-left-radius: #{8 * 0.08vw};
  border-bottom-right-radius: #{8 * 0.08vw};
  background: white;
}
.leg {
  position: absolute;
  top: #{172 * 0.08vw};
  width: #{17 * 0.08vw};
  height: #{30 * 0.08vw};
  background: #f7f7f7;
  border-bottom-left-radius: #{8 * 0.08vw};
  border-bottom-right-radius: #{8 * 0.08vw};
  overflow: hidden;
}
.leg:before {
  bottom: 0;
  left: 0;
  height: #{16 * 0.08vw};
  width: 100%;
  background: linear-gradient(
    to top,
    black #{10 * 0.08vw},
    #f7f7f7 #{10 * 0.08vw},
    #f7f7f7 #{13 * 0.08vw},
    black #{13 * 0.08vw}
  );
}
.boy .leg:before {
  background: linear-gradient(
    to top,
    black #{10 * 0.08vw},
    #784820 #{10 * 0.08vw}
  );
  height: #{30 * 0.08vw};
}
.left {
  left: #{30 * 0.08vw};
}
.right {
  right: #{30 * 0.08vw};
}
.eye {
  position: absolute;
  top: #{50 * 0.08vw};
  height: #{5 * 0.08vw};
  width: #{16 * 0.08vw};
  border-bottom-left-radius: #{16 * 0.08vw};
  border-bottom-right-radius: #{16 * 0.08vw};
  border: #{2 * 0.08vw} solid black;
  border-top-color: transparent;
}
.eye:before {
  top: -#{2 * 0.08vw};
  height: #{1 * 0.08vw};
  width: #{3 * 0.08vw};
  border-bottom-left-radius: #{4 * 0.08vw};
  border-bottom-right-radius: #{4 * 0.08vw};
  border: #{2 * 0.08vw} solid black;
  border-top-color: transparent;
}
.boy .eye:before {
  z-index: 2;
  top: -0.5vw;
  height: #{17 * 0.08vw};
  width: #{32 * 0.08vw};
  border-bottom-left-radius: #{32 * 0.08vw};
  border-bottom-right-radius: #{32 * 0.08vw};
  border: #{4 * 0.08vw} solid black;
  border-top-color: black;
}
.left-eye:before {
  left: -#{7 * 0.08vw};
}
.right-eye:before {
  right: -#{7 * 0.08vw};
}
.boy .left-eye:before {
  left: -#{11 * 0.08vw};
}
.boy .right-eye:before {
  right: -#{11 * 0.08vw};
}
.eye:after {
  z-index: 1;
  bottom: -#{18 * 0.08vw};
  left: #{2 * 0.08vw};
  height: #{12 * 0.08vw};
  width: #{12 * 0.08vw};
  border-radius: 50%;
  background: #e3512d;
}
.left-eye {
  left: #{16 * 0.08vw};
}
.right-eye {
  right: #{16 * 0.08vw};
}
.ears {
  position: absolute;
  top: #{80 * 0.08vw};
  width: #{110 * 0.08vw};
  height: #{10 * 0.08vw};
  border-radius: #{5 * 0.08vw};
  background: #f7f7f7;
}
.mouth {
  position: absolute;
  top: #{68 * 0.08vw};
  left: #{39 * 0.08vw};
  height: #{5 * 0.08vw};
  width: #{20 * 0.08vw};
  border-bottom-left-radius: #{16 * 0.08vw};
  border-bottom-right-radius: #{16 * 0.08vw};
  border: #{2 * 0.08vw} solid black;
  border-top-color: transparent;
}
.boy .mouth:before {
  width: #{10 * 0.08vw};
  height: #{2 * 0.08vw};
  top: -#{2 * 0.08vw};
  left: #{2 * 0.08vw};
  background: linear-gradient(
    to left,
    #784820 #{4 * 0.08vw},
    white #{4 * 0.08vw},
    white #{6 * 0.08vw},
    #784820 #{6 * 0.08vw}
  );
}
.boy .mouth:after {
  top: #{12 * 0.08vw};
  left: #{1 * 0.08vw};
  height: #{5 * 0.08vw};
  width: #{12 * 0.08vw};
  border-bottom-left-radius: #{12 * 0.08vw};
  border-bottom-right-radius: #{12 * 0.08vw};
  background: #784820;
}
.nose {
  position: absolute;
  top: #{55 * 0.08vw};
  left: #{46 * 0.08vw};
  height: #{7 * 0.08vw};
  width: #{4 * 0.08vw};
  border-bottom-left-radius: #{4 * 0.08vw};
  border-bottom-right-radius: #{4 * 0.08vw};
  border: #{2 * 0.08vw} solid black;
  border-top-color: transparent;
}
.boy .nose {
  top: #{42 * 0.08vw};
  height: #{17 * 0.08vw};
}
.boy .nose:before {
  width: #{10 * 0.08vw};
  height: #{4 * 0.08vw};
  top: -#{3 * 0.08vw};
  left: -#{2 * 0.08vw};
  background: black;
}
.grass {
  position: absolute;
  top: #{180 * 0.08vw};
  left: 0;
  width: #{600 * 0.08vw};
  height: #{300 * 0.08vw};
  background: #c9c9bf;
  border-radius: 100% 100% 0 0;
  box-shadow: inset #{1 * 0.08vw} #{1 * 0.08vw} #{20 * 0.08vw} #aca08e;
}
.grass:before,
.grass:after {
  top: #{75 * 0.08vw};
  width: #{140 * 0.08vw};
  height: #{140 * 0.08vw};
  background: #c9c9bf;
  border-radius: 100%;
  box-shadow: inset #{1 * 0.08vw} #{1 * 0.08vw} #{20 * 0.08vw} #aca08e;
}
.grass:before {
  left: -#{60 * 0.08vw};
}
.grass:after {
  height: #{160 * 0.08vw};
  width: #{200 * 0.08vw};
  top: #{65 * 0.08vw};
  right: -#{60 * 0.08vw};
  z-index: 5;
}
.flower {
  width: #{26 * 0.08vw};
  height: #{10 * 0.08vw};
  background: #e3512d;
  position: relative;
  border-radius: #{10 * 0.08vw};
  top: #{50 * 0.08vw};
  left: #{130 * 0.08vw};
}
.flower:before {
  top: 0;
  left: 0;
  width: #{26 * 0.08vw};
  height: #{10 * 0.08vw};
  background: #e3512d;
  border-radius: #{10 * 0.08vw};
  transform: rotate(60deg);
}
.flower:after {
  top: 0;
  left: 0;
  width: #{26 * 0.08vw};
  height: #{10 * 0.08vw};
  background: #e3512d;
  border-radius: #{10 * 0.08vw};
  transform: rotate(-60deg);
}
.stem {
  width: #{2 * 0.08vw};
  height: #{15 * 0.08vw};
  background: #828387;
  position: absolute;
  top: #{15 * 0.08vw};
  left: #{12 * 0.08vw};
}
.stem:before {
  top: #{7 * 0.08vw};
  left: #{2 * 0.08vw};
  width: #{16 * 0.08vw};
  height: #{8 * 0.08vw};
  background: #828387;
  border-radius: 50% 50% 50% 0;
}
.stem:after {
  top: #{7 * 0.08vw};
  left: -#{16 * 0.08vw};
  width: #{16 * 0.08vw};
  height: #{8 * 0.08vw};
  background: #828387;
  border-radius: 50% 50% 0 50%;
}
.two.flower {
  top: #{10 * 0.08vw};
  left: #{430 * 0.08vw};
}
.three.flower {
  top: #{25 * 0.08vw};
  left: #{480 * 0.08vw};
}
.flower span {
  z-index: 3;
  position: absolute;
  top: -#{14 * 0.08vw};
  left: -#{3 * 0.08vw};
  width: #{8 * 0.08vw};
  height: #{8 * 0.08vw};
  border-radius: 50%;
  background: #f7f7f7;
}
.cats {
  top: #{180 * 0.08vw};
  position: relative;
}
// .container:hover .cats {
//   top: #{180*7vw};
// }
.cat {
  height: #{46 * 0.08vw};
  width: #{40 * 0.08vw};
  position: absolute;
}
.cat-left {
  left: 5.5vw;
}
.cat-right {
  width: #{44 * 0.08vw};
  left: 39.5vw;
}
.cat-head {
  position: absolute;
  top: #{13 * 0.08vw};
  width: 100%;
  height: #{33 * 0.08vw};
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.cat-left .cat-head {
  background: #816132;
}
.cat-right .cat-head {
  background: #fefefe;
  filter: drop-shadow(0 0 #{1 * 0.08vw} #333);
}
.cat-head:before {
  top: -#{13 * 0.08vw};
  left: 0;
  width: 0;
  height: 0;
  border-left: #{12 * 0.08vw} solid #816132;
  border-bottom: #{12 * 0.08vw} solid transparent;
  border-right: #{12 * 0.08vw} solid transparent;
  border-top: #{12 * 0.08vw} solid transparent;
}
.cat-right .cat-head:before {
  border-left: #{13 * 0.08vw} solid #1b1818;
}
.cat-head:after {
  top: -#{13 * 0.08vw};
  right: 0;
  width: 0;
  height: 0;
  border-right: #{12 * 0.08vw} solid #816132;
  border-bottom: #{12 * 0.08vw} solid transparent;
  border-left: #{12 * 0.08vw} solid transparent;
  border-top: #{12 * 0.08vw} solid transparent;
}
.cat-right .cat-head:after {
  border-right: #{13 * 0.08vw} solid #1b1818;
}
.cat-eye {
  width: #{10 * 0.08vw};
  height: #{7 * 0.08vw};
  position: absolute;
  top: #{7 * 0.08vw};
  background: #f2f2ef;
  border-radius: #{7 * 0.08vw}/#{5 * 0.08vw};
}
.cat-right .cat-eye {
  background: #c4c3b6;
  border-radius: #{7 * 0.08vw};
  z-index: 4;
}
.cat-eye:before {
  left: calc(50% - #{2 * 0.08vw});
  width: #{4 * 0.08vw};
  height: #{7 * 0.08vw};
  background: black;
  border-radius: 50%;
}
.cat-eye.left {
  left: #{5 * 0.08vw};
}
.cat-right .cat-eye.left {
  left: #{8 * 0.08vw};
}
.cat-right .cat-eye.right {
  right: #{8 * 0.08vw};
}
.cat-eye.right {
  right: #{5 * 0.08vw};
}
.cat-eye.left:after {
  top: #{10 * 0.08vw};
  left: -#{10 * 0.08vw};
  width: #{12 * 0.08vw};
  height: #{4 * 0.08vw};
  background: linear-gradient(
    black #{1 * 0.08vw},
    transparent #{1 * 0.08vw},
    transparent #{3 * 0.08vw},
    black #{3 * 0.08vw}
  );
}
.cat-eye.right:after {
  top: #{10 * 0.08vw};
  width: #{12 * 0.08vw};
  height: #{4 * 0.08vw};
  background: linear-gradient(
    black #{1 * 0.08vw},
    transparent #{1 * 0.08vw},
    transparent #{3 * 0.08vw},
    black #{3 * 0.08vw}
  );
  right: -#{10 * 0.08vw};
}
.cat-mouth {
  position: absolute;
  top: -#{6 * 0.08vw};
  width: 0;
  height: 0;
  background: transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: #{20 * 0.08vw};
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #f2f2ef;
  border-left-color: transparent;
}
.cat-right .cat-mouth {
  border-width: #{28 * 0.08vw};
  top: -#{22 * 0.08vw};
  left: -#{6 * 0.08vw};
}
.cat-mouth:before {
  top: #{9 * 0.08vw};
  left: -#{12 * 0.08vw};
  height: #{3 * 0.08vw};
  width: #{10 * 0.08vw};
  border-bottom-left-radius: #{10 * 0.08vw};
  border-bottom-right-radius: #{10 * 0.08vw};
  border: #{1 * 0.08vw} solid black;
  border-top-color: transparent;
}
.cat-right .cat-mouth:before {
  top: #{17 * 0.08vw};
  left: -#{7 * 0.08vw};
  width: #{12 * 0.08vw};
  height: #{4 * 0.08vw};
  border-bottom-left-radius: #{12 * 0.08vw};
  border-bottom-right-radius: #{12 * 0.08vw};
}
.cat-mouth:after {
  top: #{9 * 0.08vw};
  left: 0;
  height: #{3 * 0.08vw};
  width: #{10 * 0.08vw};
  border-bottom-left-radius: #{9 * 0.08vw};
  border-bottom-right-radius: #{9 * 0.08vw};
  border: #{1 * 0.08vw} solid black;
  border-top-color: transparent;
}
.cat-right .cat-mouth:after {
  content: none;
}
.cat-neck {
  position: absolute;
  top: #{39 * 0.08vw};
  left: #{4 * 0.08vw};
  width: #{32 * 0.08vw};
  height: #{20 * 0.08vw};
  background: #dedede;
}
.cat-right .cat-neck {
  width: #{34 * 0.08vw};
  left: #{6 * 0.08vw};
  background: #f2f2ef;
}
.cat-neck:before {
  z-index: 4;
  top: -#{8 * 0.08vw};
  left: #{13 * 0.08vw};
  width: 0;
  height: 0;
  border-left: #{3 * 0.08vw} solid transparent;
  border-right: #{3 * 0.08vw} solid transparent;
  border-top: #{6 * 0.08vw} solid #e3512d;
}
.cat-right .cat-neck:before {
  top: -#{9 * 0.08vw};
}
</style>
