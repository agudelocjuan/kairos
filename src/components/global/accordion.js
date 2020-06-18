import React, { useState } from "react"
import { connect } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"

import accordion_icon from "../../images/icons/accordion-icon.svg"

const Accordion = ({
  dispatch,
  id,
  question,
  answer,
  lastChild = false,
  children,
}) => {
  const [expanded, setExpanded] = useState(null)
  const isOpen = id === expanded
  return (
    <div key={id} className={`accordion`}>
      <motion.button
        initial={false}
        onClick={() => setExpanded(isOpen ? false : id)}
        aria-expanded={isOpen}
        className={`accordion--toggle${isOpen ? " is-open" : ""} ${
          lastChild ? "lastChild" : ""
        }`}
      >
        <div className="accordion-titles">
          <div id="title">{question}</div>
        </div>

        <div className="accordion--icon">
          <img src={accordion_icon} alt="" />
        </div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="accordion--content"
          >
            <div className="accordion--inner">{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default connect(
  state => ({
    mainDrawer: state.global.mainDrawer,
  }),
  null
)(Accordion)
