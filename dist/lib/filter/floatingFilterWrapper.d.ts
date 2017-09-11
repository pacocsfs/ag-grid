// Type definitions for ag-grid v13.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
import { IFloatingFilterParams, IFloatingFilterComp, FloatingFilterChange } from "./floatingFilter";
import { Component } from "../widgets/component";
import { IAfterGuiAttachedParams, IComponent } from "../interfaces/iComponent";
export interface IFloatingFilterWrapperParams<M, F extends FloatingFilterChange, P extends IFloatingFilterParams<M, F>> {
    column: Column;
    floatingFilterComp: IFloatingFilterComp<M, F, P>;
    suppressFilterButton: boolean;
}
export interface IFloatingFilterWrapper<M> {
    onParentModelChanged(parentModel: M): void;
}
export interface IFloatingFilterWrapperComp<M, F extends FloatingFilterChange, PC extends IFloatingFilterParams<M, F>, P extends IFloatingFilterWrapperParams<M, F, PC>> extends IFloatingFilterWrapper<M>, IComponent<P, IAfterGuiAttachedParams> {
}
export declare abstract class BaseFilterWrapperComp<M, F extends FloatingFilterChange, PC extends IFloatingFilterParams<M, F>, P extends IFloatingFilterWrapperParams<M, F, PC>> extends Component implements IFloatingFilterWrapperComp<M, F, PC, P> {
    private context;
    private beans;
    column: Column;
    init(params: P): void;
    abstract onParentModelChanged(parentModel: M): void;
    abstract enrichBody(body: HTMLElement): void;
    private setupWidth();
    private onColumnWidthChanged();
}
export declare class FloatingFilterWrapperComp<M, F extends FloatingFilterChange, PC extends IFloatingFilterParams<M, F>, P extends IFloatingFilterWrapperParams<M, F, PC>> extends BaseFilterWrapperComp<M, F, PC, P> {
    eButtonShowMainFilter: HTMLInputElement;
    private menuFactory;
    private gridOptionsWrapper;
    floatingFilterComp: IFloatingFilterComp<M, F, PC>;
    suppressFilterButton: boolean;
    init(params: P): void;
    enrichBody(body: HTMLElement): void;
    onParentModelChanged(parentModel: M): void;
    private showParentFilter();
}
export declare class EmptyFloatingFilterWrapperComp extends BaseFilterWrapperComp<any, any, any, any> {
    enrichBody(body: HTMLElement): void;
    onParentModelChanged(parentModel: any): void;
}