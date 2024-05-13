const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
	name: "war1",
	version: "1.0.0",
	role: 2,
	credits: "kissgiversakanya",
	description: "War nát cái boxchat",
	hasPrefix: false,
	usages: "war đấm chất",
	cooldown: 10,
};

module.exports.run = async function({ api, args, event, admin }) {
	var mention = Object.keys(event.mentions)[0];
	let name = event.mentions[mention];
	var arraytag = [];
	arraytag.push({ id: mention });
	var a = function(a) {
		api.sendMessage(a, event.threadID);
	};
	a("Namisskita");
	setTimeout(() => {
		a({
			body:
				"pansinin mo naman ako"
		});
	}, 3000);
	setTimeout(() => {
		a({ body: "Mahal kita☹️" });
	}, 5000);
	setTimeout(() => {
		a({ body: "namiss kita palagi" });
	}, 7000);
	setTimeout(() => {
		a({
			body:
				"kung kasama langsana kita"
		});
	}, 9000);
	setTimeout(() => {
		a({ body: "Imissyou sm🥺" });
	}, 12000);
	setTimeout(() => {
		a({ body: "mahal moko?🥺" });
	}, 15000);
	setTimeout(() => {
		a({ body: "nandito ako sa kalsada nagtatampo😭" });
	}, 17000);
	setTimeout(() => {
		a({ body: "sarap mo" });
	}, 20000);
	setTimeout(() => {
		a({ body: "pansinin moko sige na oh😭"});
	}, 23000);
	setTimeout(() => {
		a({ body: "namiss kaba?" });
	}, 25000);
	setTimeout(() => {
		a({ body: "hindi☹️" });
	}, 28500);
	setTimeout(() => {
		a({ body: "deserve" });
	}, 31000);
	setTimeout(() => {
		a({ body: "at least may namimiss😘" });
	}, 36000);
	setTimeout(() => {
		a({ body: "🥵🥵🥵🥵🥵" });
	}, 39000);
	setTimeout(() => {
		a({ body: "yawa" });
	}, 40000);
	setTimeout(() => {
		a({ body: "swerte mo pag naging akin ka 12am palang may good morning kana babe😘" });
	}, 65000);
	setTimeout(() => {
		a({ body: "tagal niya mag online huhu" });
	}, 70000);
	setTimeout(() => {
		a({ body: "SIYA MARAMING KACHAT TAPOS AKIN SIYA LANG" });
	}, 75000);
	setTimeout(() => {
		a({ body: "ABA HINDI PWEDE YAN" });
	}, 80000);
	setTimeout(() => {
		a({ body: "OO HINDI LANG AKO KACHAT NIYA🥺" });
	}, 85000);
	setTimeout(() => {
		a("REDFLAG🚩🚩🚩");
	}, 90000);
	setTimeout(() => {
		a({ body: "REDFLAG TALAGA SI BOII🚩🚩🚩" });
	}, 95000);
	setTimeout(() => {
		a({ body: "🚩🚩🚩🚩" });
	}, 100000);
	setTimeout(() => {
		a({ body: "REDFLAG" });
	}, 105000);
	setTimeout(() => {
		a({ body: "UGH" });
	}, 115000);
	setTimeout(() => {
		a({ body: "😋" });
	}, 125000);
	setTimeout(() => {
		a({ body: "YAWA" });
	}, 135000);
	setTimeout(() => {
		a({ body: "yamete" });
	}, 145000);
	setTimeout(() => {
		a({ body: "uwu" });
	}, 155000);
	setTimeout(() => {
		a({ body: "🦖" });
	}, 165000);
};
