/*
	名字:	紅色恐龍15日使用券
	地圖:	紅色恐龍15日使用券
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430667, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001127), 1, 1, im.getCurrentTime() + (15 * 24 * 60 * 60 * 1000));
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}