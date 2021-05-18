import React, { useState } from 'react'
import TechSelectOptions from '../techs/TechSelectOptions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Bitte tragen Sie eine Nachricht und einen Techniker',
      })
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      }

      addLog(newLog)

      M.toast({ html: `Eintrag wurde von ${tech} eingetragen` })

      // Clear Fields
      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Systemeintrag</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Nachricht
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Techniker auswählen
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Erfordert Aufmerksamkeit</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-green btn'
        >
          Bestätigen
        </a>
      </div>
    </div>
  )
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

const modalStyle = {
  width: '75%',
  height: '75%',
}

export default connect(null, { addLog })(AddLogModal)
