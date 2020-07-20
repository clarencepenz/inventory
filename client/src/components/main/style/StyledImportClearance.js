import styled from 'styled-components'


export const StyledCategoryForm = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    font-size: 25px;

    label {
        padding-left: 20px;
        padding-bottom: 30px;
        font-size: 18px;
        font-weight: bolder;
        width: 150px;
        display: inline-block;
    }

    select {
        width: 200px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
        border-color: #aaa;
    }

    input[type="radio"] {
        height: 30px;
        width: 30px;
        padding-top: 15px;
        margin-left: -10px;
        background-color: #f7f7f7;
        border-color: #aaa;
    }

    input[type="text"], input[type="number"] {
        min-width: 50%;
        height: 40px;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        box-sizing: border-box;
        tansition: .3s;
        border: 2px solid #aaa;
        padding: 10px 0 10px 10px;
        background-color: #f7f7f7;
    }

    input[type="text"]:focus, input[type="number"]:focus {
        border-color: dodgerBlue;
    }

    .Client-container-title {
        width: 150px;
    }


    .Section-two {
        width: 300px;
        display: inline-block;
    }

    .Section-two-input {
        width: 150px;
        display: inline-block;
    }


    .Category-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(70px, 1fr));
    }

    .Client-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(70px, 1fr));
    }
`;


export const StyledCargoForm = styled.div`
    box-sizing: border-box;
    overflow: hidden;

       label {
            padding: 0 20px;
            font-size: 17px;
            font-weight: bolder;
            width: 300px;
            display: inline-block;
       }

       input[type='file'] {
           display: none;
       }

        .Browse {
            color: #fff;
            height: 50px;
            width: 150px;
            background-color: #005561;
            border-radius: 4px;
            font-size: 18px;
            margin: auto;
            padding-top: 12px;
            padding-left: 20px;
            padding-right: 20px;
            text-align: center;
            cursor: pointer;
    }

       .FileUpload {
        width: 250px;
        font-size: 15px!important;
      }

      .FileContract {
        width: 200px;
      }

      input[type="radio"] {
        height: 25px;
        width: 25px;
        padding-top: 15px;
        background-color: #f7f7f7;
        border-color: #aaa;
      }

       input[type="text"], input[type="number"] {
        width: 30%;
        height: 40px;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        box-sizing: border-box;
        tansition: .3s;
        border: 2px solid #aaa;
        padding: 10px 0 10px 10px;
        background-color: #f7f7f7;
    }

    select {
        width: 220px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
        border-color: #aaa;
    }


      .Type-label-container {
        width: 110px;
        display: inline-block;
      }

      .Type-label-bulk {
        width: 60px;
        display: inline-block;
      }

      .Cargo-label {
          width: 80px;
      }

      .Cargo-size {
          margin-left: 80px;
      }

      .Cargo-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(30px, 1fr));
        margin-bottom: 40px;
      }

      .Cargo-others {
          margin-bottom: 20px;
      }

      .Cargo-others > label {
        width: 200px;
    }

      .OtherInput{
        width: 20%!important;
    }

      .Cargo-numbers {
          min-width: 60%;
      }

    
    



`;

export const StyledAgentForm = styled.div`
       label {
            padding-left: 40px;
            padding-top: 40px;
            font-size: 17px;
            font-weight: bolder;
            width: 300px;
            display: inline-block;
       }


       input[type="text"], input[type="number"] {
        width: 30%;
        height: 40px;
        border-radius: 4px;
        margin: 8px 0;
        outline: none;
        box-sizing: border-box;
        tansition: .3s;
        border: 2px solid #aaa;
        padding: 10px 0 10px 10px;
        background-color: #f7f7f7;
    }

    input[type='file'] {
        display: none;
    }

    .Browse {
        color: #fff;
        height: 50px;
        width: 150px;
        background-color: #005561;
        border-radius: 4px;
        font-size: 18px;
        margin: auto;
        padding-top: 12px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        cursor: pointer;
    }


    .FileUpload {
        width: 250px;
      }

    }

    select {
        width: 200px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
        border-color: #aaa;
    }



`;


