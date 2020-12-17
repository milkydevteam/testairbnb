export default class Encryption {
  msg = '';
  static a0 = 1;
  static a21 = 3;
  static a1 = '+';
  static k1 =
    '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP=-';
  static k2 = '314838954267';
  constructor(_msg: string) {
    if (_msg.length === 16) {
      const addIndex = Number.parseInt(
        _msg.substring(_msg.length - 1, _msg.length),
      );
      this.msg =
        Encryption.a1 +
        _msg.substring(0, addIndex) +
        Encryption.k2.substring(addIndex, addIndex + 2) +
        _msg.substring(addIndex, _msg.length);
    } else {
      throw Error('length is 16');
    }
  }

  public encrypted() {
    let index = 0;
    let start = 0;
    let token = '';
    if (this.msg.substring(0, 1) === '+') {
      token = '+';
      index = 1;
      start = 1;
    }
    let soDu = 0;
    let soDuA1 = 0;
    while (index < this.msg.length) {
      const xi = Number.parseInt(this.msg.substring(index, index + 1));
      const tmpi = soDu + Encryption.a0 + Encryption.a21 + xi * 4;
      soDu = Math.floor(tmpi / 8);
      const p2 = tmpi % 8;
      let p1 = 0;
      if (index === start) {
        p1 = 0;
        soDuA1 = soDu;
      } else {
        p1 = soDu;
      }
      token += Encryption.k1.substring(p1 * 8 + p2, p1 * 8 + p2 + 1);
      ++index;
    }
    token += Encryption.k1.substring(soDuA1 * 8 + 1, soDuA1 * 8 + 1 + 1);
    return token;
  }
}
