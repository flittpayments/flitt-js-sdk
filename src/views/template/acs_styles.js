export default (data) => `
<style>
    .flitt-modal {
        box-sizing: border-box;
        margin: 100px auto;
        max-width: 680px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    @media (max-width: 850px) {
        .flitt-modal {
            margin: 50px auto;
        }
    }

    @media (max-width: 695px) {
        .flitt-modal {
            max-width: 100%;
            margin: 5px;
        }
    }

    .flitt-modal-wrapper {
        box-sizing: border-box;
        overflow: auto;
        position: fixed;
        z-index: 99999;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .flitt-modal-header {
        box-sizing: border-box;
        background-color: #fafafa;
        height: 50px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .flitt-modal-close {
        box-sizing: border-box;
        float: right;
        overflow: hidden;
        height: 50px;
        text-decoration: none;
        border-top-right-radius: 5px;
        color: #949494;
    }

    .flitt-modal-close:hover, .flitt-modal-close:focus, .flitt-modal-close:active {
        text-decoration: none;
        color: #646464;
    }

    .flitt-modal-close:before {
        content: "×";
        font-size: 50px;
        line-height: 50px;
        padding: 0 10px;
    }

    .flitt-modal-title {
        box-sizing: border-box;
        border-top-left-radius: 5px;
        line-height: 20px;
        height: 50px;
        padding: 5px 15px;
        font-size: 12px;
        display: table-cell;
        vertical-align: middle;
    }
    .flitt-modal-content {
        box-sizing: border-box;
        border-bottom-left-radius: 5px;
        min-height: 650px;
    }
    .flitt-modal-iframe {
        overflow-x: hidden;
        border: 0;
        display: block;
        width: 100%;
        height: 750px;
    }
</style>
`
