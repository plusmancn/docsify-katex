module.exports = function math_plugin(md, options) {
    // Default options
    options = options || {};

    // Give control of headings to marked for anchor and sidebar
    md.renderer.rules.heading_open = function(tokens, idx) {
        return '\n' + tokens[idx].markup + ' ';
    }
    md.renderer.rules.lheading_open = function(tokens, idx) {
        return '\n' + tokens[idx].markup + ' ';
    }
    md.renderer.rules.heading_close = function(tokens, idx) {
        return '\n';
    }
    md.renderer.rules.lheading_close = function(tokens, idx) {
        return '\n';
    }

    // Give control of code block to marked for mermaid, etc.
    md.renderer.rules.fence = function(tokens, idx) {
        return "\n```" + tokens[idx].info + '\n' + tokens[idx].content + "```\n";
    }
};  