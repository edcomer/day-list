/**
 * Day List calendar link.
 *
 * Runs in your own Google account (script.google.com) and returns the appointments on your
 * main Google Calendar to Day List. Read-only: it never creates, changes or deletes events.
 * Unlike Google sign-in access, this link does not expire.
 *
 * Anyone who has this script's Web app URL can read your appointments, so treat the URL like
 * a password. To shut it off, open the script and choose Deploy > Manage deployments > Archive.
 */
function doGet(e) {
  var days = Math.max(1, Math.min(Number(e && e.parameter && e.parameter.days) || 31, 62));
  var tz = Session.getScriptTimeZone();
  var start = new Date(Date.now() - 24 * 60 * 60 * 1000);           // from yesterday, to be safe
  var end = new Date(Date.now() + (days + 1) * 24 * 60 * 60 * 1000);
  var calendar = CalendarApp.getDefaultCalendar();

  var events = calendar.getEvents(start, end)
    .filter(function (ev) {
      try { return ev.getMyStatus() !== CalendarApp.GuestStatus.NO; }   // leave out declined invitations
      catch (err) { return true; }
    })
    .map(function (ev) {
      var allDay = ev.isAllDayEvent();
      return {
        title: ev.getTitle() || '(No title)',
        allDay: allDay,
        start: allDay ? Utilities.formatDate(ev.getAllDayStartDate(), tz, 'yyyy-MM-dd') : ev.getStartTime().toISOString(),
        end: allDay ? Utilities.formatDate(ev.getAllDayEndDate(), tz, 'yyyy-MM-dd') : ev.getEndTime().toISOString(),
        color: ev.getColor() || ''
      };
    });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, events: events }))
    .setMimeType(ContentService.MimeType.JSON);
}
