"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageForm = function (_React$Component) {
	_inherits(MessageForm, _React$Component);

	function MessageForm() {
		_classCallCheck(this, MessageForm);

		var _this = _possibleConstructorReturn(this, (MessageForm.__proto__ || Object.getPrototypeOf(MessageForm)).call(this));

		_this.submit = _this.submit.bind(_this);
		_this.changeText = _this.changeText.bind(_this);
		return _this;
	}

	_createClass(MessageForm, [{
		key: "submit",
		value: function submit(event) {
			event.preventDefault();
			this.props.onSend();
		}
	}, {
		key: "changeText",
		value: function changeText(event) {
			this.props.onChangeText(event.target.value);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"form",
				{ onSubmit: this.submit },
				React.createElement("input", { type: "text", value: this.props.text, onChange: this.changeText }),
				React.createElement(
					"button",
					null,
					"Send"
				)
			);
		}
	}]);

	return MessageForm;
}(React.Component);
