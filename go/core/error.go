package core

type BudError struct {
	IsBudError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBudError(code string, msg string, ctx *Context) *BudError {
	return &BudError{
		IsBudError: true,
		Sdk:              "Bud",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BudError) Error() string {
	return e.Msg
}
