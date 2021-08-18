class Message {
  name;
  text;
  time;
  Message(name, text) {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    const currentTime = hours + ":" + min;
    this.time = currentTime;
    this.text = text;
    this.name = name;
  }
}

export default Message;
