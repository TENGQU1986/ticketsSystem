import React from 'react';

class TicketsForm extends React.Component {
  state = {
    title: '',
    description: '',
    assignee: '',
    criticality: '',
    date: 0,
    time: 0,
    error: '',
    status: 'todo'
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onAssigneeChange = (e) => {
    const assignee = e.target.value;
    this.setState(() => ({ assignee }));
  }
  onCriticalityChange = (e) => {
    const criticality = e.target.value;
    this.setState(() => ({ criticality }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.title) {
      this.setState(() => ({ error: 'please provide title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        assignee: this.state.assignee,
        criticality: this.state.criticality,
        date: this.state.date,
        time: this.state.time,
        status: this.state.status
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          title: 
          <input
          type="text"
          placeholder="title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
          />
          description:
          <input
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          />
          assignee:
          <input
          type="text"
          placeholder="assignee"
          value={this.state.assignee}
          onChange={this.onAssigneeChange}
          />
          criticality:
          <input
          type="text"
          placeholder="criticality"
          value={this.state.criticality}
          onChange={this.onCriticalityChange}
          />
          date: <input type="number" placeholder="MM/DD/YYYY"/>
          time: <input type="number" placeholder="HH/MM"/>
          <button>Add New Ticket</button>
        </form>
      </div>
    );
  };
}

export default TicketsForm;