var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>

        <p>Do you like this app?</p>
        <div className="switch large">
          <input className="switch-input" id="yes-no" type="checkbox" name="exampleSwitch"/>
          <label className="switch-paddle" for="yes-no">
            <span className="show-for-sr">Do you like me?</span>
            <span className="switch-active" aria-hidden="true">Yes</span>
            <span className="switch-inactive" aria-hidden="true">No</span>
          </label>
        </div>
      </div>
    )
}

module.exports = About;
