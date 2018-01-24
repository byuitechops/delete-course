/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/

/* Part of clean up. This module deletes the course
 out of canvas if a fatal error was thrown */
const canvas = require('canvas-wrapper');

module.exports = (course, stepCallback) => {

    /* Only delete when flagged for removal and canvasOU exists */
    course.message(`course.settings.delete: ${course.settings.delete}`);
    if (course.settings.deleteCourse == true) {
        var url = `/api/v1/courses/${course.info.canvasOU}?event=delete`;
        canvas.delete(url, (err, body) => {
            if (err) {
                course.throwErr('deleteCourse', err);
                return;
            }
            course.message('"Delete Course" was disabled in settings. The Canvas course was not deleted.');
            stepCallback(null, course);
            return;
        });
    } else if (course.info.canvasOU === undefined) {
        course.warning('Canvas OU was not defined. Was the course created? (ignore if you skipped course upload)');
        stepCallback(null, course);
        return;
    } else {
        course.message('"Delete Course" was disabled in settings. The Canvas course was not deleted.');
        stepCallback(null, course);
        return;
    }
}
