package core

type MathFunctionParserError struct {
	IsMathFunctionParserError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMathFunctionParserError(code string, msg string, ctx *Context) *MathFunctionParserError {
	return &MathFunctionParserError{
		IsMathFunctionParserError: true,
		Sdk:              "MathFunctionParser",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MathFunctionParserError) Error() string {
	return e.Msg
}
