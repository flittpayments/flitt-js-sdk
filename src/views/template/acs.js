import styles from './acs_styles.js'

export default (data) => `
${styles(data)}
<div class="flitt-modal-wrapper">
    <div class="flitt-modal">
        <div class="flitt-modal-header">
            <a href="javascript:void(0)" class="flitt-modal-close"></a>
            <div class="flitt-modal-title">
                ${data.messages.modalHeader}
                <a href='javascript:void(0)'>${data.messages.modalLinkLabel}</a>
            </div>
        </div>
        <div class="flitt-modal-content">
            <iframe src="about:blank" class="flitt-modal-iframe" frameborder="0" allowtransparency="true"></iframe>
        </div>
    </div>
</div>
`
