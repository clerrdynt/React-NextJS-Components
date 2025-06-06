'use client';

import { useState } from 'react';

const StudentForm = () => {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    address: '',
    birthday: '',
    degreeProgram: '',
    cellphone: '',
    email: '',
    institutionalEmail: '',
    mailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted info:\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.formWrapper}>
        <div style={styles.card}>
          <h3 style={styles.heading}>Basic Information</h3>
          <label>Last Name:</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required />

          <label>First Name:</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required />

          <label>Address:</label>
          <input name="address" value={form.address} onChange={handleChange} required />

          <label>Birthday:</label>
          <input name="birthday" type="date" value={form.birthday} onChange={handleChange} required />

          <label>Degree Program:</label>
          <input name="degreeProgram" value={form.degreeProgram} onChange={handleChange} required />
        </div>

        <div style={styles.card}>
          <h3 style={styles.heading}>Contact Information</h3>
          <label>Cellphone Number:</label>
          <input name="cellphone" value={form.cellphone} onChange={handleChange} required />

          <label>Email Address:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Institutional Email:</label>
          <input type="email" name="institutionalEmail" value={form.institutionalEmail} onChange={handleChange} required />

          <label>Mail Address:</label>
          <input name="mailAddress" value={form.mailAddress} onChange={handleChange} required />
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#0d0d0d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  formWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    maxWidth: '900px',
  },
  card: {
    flex: '1 1 350px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #ff7f88',
    borderRadius: '12px',
    boxShadow: '0 0 15px #ff7f88',
    padding: '25px',
    color: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    minWidth: '300px',
  },
  heading: {
    color: '#ff7f88',
    marginBottom: '10px',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: '30px',
    backgroundColor: '#ff7f88',
    color: '#fff',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};

export default StudentForm;
